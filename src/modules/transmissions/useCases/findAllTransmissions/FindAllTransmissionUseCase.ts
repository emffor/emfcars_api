import { prisma } from "../../../../database/prismaClients";


export class FindAllTransmissionUseCase {
    async execute(transmissionId: string) {
        const cars = await prisma.transmissions.findMany({
            where: {
                id: transmissionId
            },
            select: {
                id: true,
                name: true,
                Cars: true
            }
        });

        return cars;
    }
}