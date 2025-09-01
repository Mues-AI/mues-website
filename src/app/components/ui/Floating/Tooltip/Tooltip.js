
import {
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import {
  Children,
  cloneElement,
  isValidElement,
  useState,
} from "react";
import { createPortal } from "react-dom";

import styles from "./Tooltip.module.scss";

export function Tooltip(props) {
  const firstChild = Children.only(props.children);

  if (!isValidElement(firstChild)) throw Error("Invalid Element");

  const [isOpen, setOpen] = useState(false);

  const middleware = [offset(8), flip(), shift()];

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setOpen,
    middleware,
    placement: props.placement,
    whileElementsMounted: autoUpdate,
  });

  const interactions = useInteractions([
    useHover(context),
    useFocus(context),
    useDismiss(context),
    useRole(context, { role: "tooltip" }),
  ]);

  return (
    <>
      {cloneElement(
        firstChild,
        interactions.getReferenceProps({
          ref: refs.setReference,
        })
      )}

      {isOpen &&
        createPortal(
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={styles.tooltipFloating}
            {...interactions.getFloatingProps()}
          >
            {props.tooltip}
          </div>,
          document.body
        )}
    </>
  );
}
