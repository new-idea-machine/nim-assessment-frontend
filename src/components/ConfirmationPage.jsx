import { useParams } from "react-router";

function ConfirmationPage() {

  const { id } = useParams();

  return (
    <div className="confirmation-page">
      CONFIRMATION PAGE {id}
    </div>
  );
}

export default ConfirmationPage;