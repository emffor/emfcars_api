import { prisma } from "../../../../database/prismaClients";

export interface ICreateTransmission {
    name: string;
    description: string;
}

export class CreateTransmissionUseCase {

    async execute({ name, description }: ICreateTransmission) {
        const transmissionExists = await prisma.transmissions.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive",
                }
            }
        })

        if (transmissionExists) {
            throw new Error("Transmission already exists!");
        }

        const transmission = await prisma.transmissions.create({
            data: {
                name,
                description
            },
        });

        return transmission;
    }
}