// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

// Book
import { book } from '../../../../navigation/book';

// Mutations
const mutationTasksCleaner = loader('./gql/mutationTasksCleaner.graphql');

export const useTasksCleaner = () => {
    const [ _removeAll, { error }] = useMutation(mutationTasksCleaner);
    const history = useHistory();

    const removeAllTasks = async () => {
        try {
            const { data } = await _removeAll();

            if (data) {
                history.push(book.tasks);
            }
        } catch ({ message }) {
            console.error(message);
        }
    };

    return {
        error,
        removeAllTasks,
    };
};
