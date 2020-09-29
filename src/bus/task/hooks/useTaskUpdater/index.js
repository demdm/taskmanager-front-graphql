// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';

// Mutations
const mutationTaskUpdater = loader('./gql/mutationTaskUpdater.graphql');

export const useTaskUpdater = () => {
    const [ _update, { error }] = useMutation(mutationTaskUpdater);

    const updateTask = async (id, task, refetch) => {
        try {
            const { data } = await _update({
                variables: {
                    id,
                    task
                }
            });

            if (data) {
                refetch();
            }
        } catch ({ message }) {
            console.error(message);
        }
    };

    return {
        error,
        updateTask,
    };
};
