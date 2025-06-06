import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const getAvailabilityById = defineAction({
  accept: "json",
  input: z.string(),

  handler: async (placeId) => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const isAvailable = Math.random() > 0.5; // true | false
    const spotsAvailable = Math.floor(Math.random() * 10) + 1;

    let message = `No hay espacio disponibles`;
    if (isAvailable) {
      message =
        spotsAvailable > 1
          ? `${spotsAvailable} espacios disponibles`
          : `1 espacio disponible`;
    }

    return {
      id: placeId,
      isAvailable: isAvailable,
      spotsAvailable: spotsAvailable,
      message: message,
    };
  },
});
