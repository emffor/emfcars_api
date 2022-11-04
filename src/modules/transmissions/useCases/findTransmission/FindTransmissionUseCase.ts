import { prisma } from "../../../../database/prismaClients";

export class FindTransmissionUseCase {
    async execute() {
        const transmissions = await prisma.transmissions.findMany();

        return transmissions;
    }
}


