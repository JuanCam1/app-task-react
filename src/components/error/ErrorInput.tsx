
interface ErrorInputProps {
  message: string | undefined
}
const ErrorInput = ({ message }: ErrorInputProps) => {
  return (
    <span className={`text-xs text-red-500 ${message ? "opacity-100" : "opacity-0"}`}>{message || "error"}</span>
  )
}

export default ErrorInput