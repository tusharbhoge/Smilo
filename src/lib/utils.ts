import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateAvatar(
  name: string,
  gender: "MALE" | "FEMALE"
) {
  const seed = name.replace(/\s+/g, "").toLowerCase();

  const style ="toon-head"

  return `https://api.dicebear.com/9.x/${style}/svg?seed=${seed}`;
}

// phone formatting function for Indian numbers 🇮🇳
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  // Remove everything except digits
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  // If number starts with 91 and has 12 digits
  if (phoneNumber.startsWith("91") && phoneNumberLength > 10) {
    const localNumber = phoneNumber.slice(2, 12);

    if (localNumber.length <= 5) {
      return `+91 ${localNumber}`;
    }

    return `+91 ${localNumber.slice(0, 5)} ${localNumber.slice(5)}`;
  }

  // Normal 10-digit Indian number
  if (phoneNumberLength <= 5) return phoneNumber;

  return `${phoneNumber.slice(0, 5)} ${phoneNumber.slice(5, 10)}`;
};
