import classNames from "classnames";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { WalletIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface Props {
  collapse: boolean;
  setCollapse: (collapse: boolean) => void;
}

export default function Sidebar({ collapse, setCollapse }: Props) {
  const wrapperClasses = classNames("bg-[#661C11] text-white h-[100%] fixed", {
    ["w-80"]: !collapse,
    ["w-20"]: collapse,
  });
  return (
    <div className={wrapperClasses}>
      <div className="w-[100%] flex justify-end p-4 mb-6">
        <ChevronLeftIcon
          className="h-6"
          onClick={() => setCollapse(!collapse)}
        />
      </div>
      <div className="h-30 w-[100%]">
        <Link className="w-[100%] py-6 px-8 flex" href="/tickets">
          <WalletIcon className="h-6 pr-4" />
          Tickets
        </Link>
        <Link className="w-[100%] py-6 px-8 flex" href="/profile">
          <UserCircleIcon className="h-6 pr-4" />
          Profile
        </Link>
        <Link className="w-[100%] py-6 px-8 flex" href="/settings">
          <WrenchScrewdriverIcon className="h-6 pr-4" />
          Settings
        </Link>
      </div>
    </div>
  );
}
