import BorderBadge from './ui/BorderBadge';
import SubHeadings from './ui/SubHeadings';

export default function MeetMuse() {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 max-w-[1168px] mt-24 md:mt-32 lg:mt-[200px] mb-12 md:mb-18 lg:mb-24 mx-auto">

      <BorderBadge>MEET MUES AI</BorderBadge>

      <SubHeadings type="h2" className="max-w-xl text-center">
      A new kind of <br /> software interaction.
      </SubHeadings>

      <p className="subHeadingsDescription w-full max-w-[576px] text-center">
        Mues onboards your users, helps them use your product, and reduces churn with lower support effort.
      </p>
      
    </div>
  );
}