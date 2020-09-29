// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';

// Mutations
const mutationTaskCreator = loader('./gql/mutationTaskCreator.graphql');

export const useTaskCreator = () => {
    const [ _create, { error }] = useMutation(mutationTaskCreator);

    const createTask = async (task, refetch) => {
        try {
            const { data } = await _create({
                variables: {
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
        createTask,
    };
};
