import TransactionsDetailContent from "../../../components/organisms/TransactionDetailContent";
import { HistoryTransactionTypes } from "../../../services/data-types";
import { getTransactionsDetail } from "../../../services/member";

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function TransactionsDetail(props: TransactionDetailProps) {
  const { transactionDetail } = props;

  return (
    <section className="transactions-detail overflow-auto">
      <TransactionsDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTrx } = params;

  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  // decode jwt
  const jwtToken = Buffer.from(token, "base64").toString("ascii");

  // const payload: JWTPayloadTypes = jwtDecode(jwtToken);

  // const userFromPayload: UserTypes = payload.player;
  // const IMG = process.env.NEXT_PUBLIC_IMG;
  const response = await getTransactionsDetail(idTrx, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
