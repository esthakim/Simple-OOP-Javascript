export function formatter(amount) {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
}

export function formatName(name, gender) {
  return gender === "male" ? `Mr ${name}` : `Mrs ${name}`;
}
