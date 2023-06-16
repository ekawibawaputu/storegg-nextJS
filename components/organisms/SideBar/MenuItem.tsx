import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-transaction"
    | "ic-menu-reward"
    | "ic-menu-card"
    | "ic-menu-messages"
    | "ic-menu-setting"
    | "ic-menu-logout";
  active?: Boolean;
  href?: string;
  onClick?: () => void;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href = "/", onClick } = props;
  const classItems = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItems} onClick={onClick} role="presentation">
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="Menu" />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href} legacyBehavior>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
