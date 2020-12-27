export default function formatPhone(value: string) {
  const phone = value.replace(
    /(\d{4,5})(\d{4})/,
    (regex, arg1, arg2) => arg1 + "-" + arg2
  );

  return phone;
}
