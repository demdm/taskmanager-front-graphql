// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

// Book
import { book } from '../../../../navigation/book';

// Mutations
const mutationTaskUpdater = loader('./gql/mutationTaskUpdater.graphql');

export const useTaskUpdater = () => {
    const [ _update, { error }] = useMutation(mutationTaskUpdater);
    const history = useHistory();

    const updateTask = async (id, task) => {
        try {
            const { data } = await _update({
                variables: {
                    id,
                    task
                }
            });

            if (data) {
                history.push(book.tasks);
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
