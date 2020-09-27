// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

// Book
import { book } from '../../../../navigation/book';

// Mutations
const mutationTaskCleaner = loader('./gql/mutationTaskCleaner.graphql');

export const useTaskCleaner = () => {
    const [ _remove, { error }] = useMutation(mutationTaskCleaner);
    const history = useHistory();

    const removeTask = async id => {
        try {
            const { data } = await _remove({
                variables: {
                    id
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
        removeTask,
    };
};
