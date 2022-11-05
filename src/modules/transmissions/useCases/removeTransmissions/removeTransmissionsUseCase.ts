import { prisma } from "../../../../database/prismaClients";


export class RemoveTransmissionUseCase {
    async execute(id: string) {
        const transmissionExists = await prisma.cars.findFirst({
            where: {
                transmissionId: id
            },
        })

        if (transmissionExists) {
            throw new Error("Transmission cannot be removed because it has cars associated with it!");
        }

        const transmission = await prisma.transmissions.delete({
            where: {
                id
            },
        });

        return transmission;
    }
}