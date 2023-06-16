import Link from "next/link";

interface FooterProps {
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4?: string;
  url1: "mailto: hi@store.gg";
  url2: "mailto: team@store.gg";
  url3: "http://maps.google.com/?q=Pasific 12 Jakarta Selatan";
  url4: "tel: 02111229090";
}

export default function FooterItem(props: Partial<FooterProps>) {
  const {
    title,
    desc1,
    desc2,
    desc3,
    desc4,
    url1 = "",
    url2 = "",
    url3 = "",
    url4 = "",
  } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <Link href={url1} legacyBehavior>
            <a className="text-lg color-palette-1 text-decoration-none">
              {desc1}
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href={url2} legacyBehavior>
            <a className="text-lg color-palette-1 text-decoration-none">
              {desc2}
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href={url3} legacyBehavior>
            <a className="text-lg color-palette-1 text-decoration-none">
              {desc3}
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href={url4} legacyBehavior>
            <a className="text-lg color-palette-1 text-decoration-none">
              {desc4}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
