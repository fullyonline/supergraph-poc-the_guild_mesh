import {Resolvers } from '../.mesh'

const resolvers: Resolvers = {
    ServiceAppointment: {
        patient: {
            selectionSet: `{ patientNumber }`,
            resolve: async (serviceAppointment: any, args, context, info) => {
                console.log('delegateToSchema', serviceAppointment, args, context, info);
                return await context.Patients.Query.patient({
                    serviceAppointment,
                    args: { patientNumber: serviceAppointment.patientNumber },
                    context,
                    info
                });
            }
        }
    }
}

export default resolvers
