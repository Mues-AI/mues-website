import ModularPresentationParts from './ModularPresentationParts';

const ModularPresentationMain = () => {
  return (
    <div className="flex flex-col max-w-[1168px] mx-auto gap-[200px] mb-[148px]">
      <ModularPresentationParts variant="onboarding" />
      <ModularPresentationParts variant="productAdoption" />
      <ModularPresentationParts variant="insights" />
      <ModularPresentationParts variant="easytointegrate" />
    </div>
  );
};

export default ModularPresentationMain;