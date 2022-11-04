import { prisma } from "../../../../database/prismaClients";


interface IUpdateTransmission {
    id: string;
    name: string;
    description?: string;
}

export class UpdateTransmissionsUseCase {
    async execute({ id, name, description }: IUpdateTransmission) {
        const transmission = await prisma.transmissions.update({
            where: {
                id,
            },
            data: {
                name,
                description,
            },
        });

        return transmission;
    }
}