import { prisma } from "../../../../database/prismaClients";


export class FindTransmissionIdUseCase {
    async execute(id: string) {
        const transmissions = await prisma.transmissions.findMany({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
                description: true,
            }
        });

        if (!transmissions) {
            throw new Error("Transmission not found!");
        }

        return transmissions;
    }
}