import { Dispatch, SetStateAction } from "react";

interface SignInModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function SignInModal({ show, setShow }: SignInModalProps) {
  if (!show) return null;
  return <div>Sign in</div>;
}
