// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

// Book
import { book } from '../../../../navigation/book';

// Mutations
const mutationTaskCreator = loader('./gql/mutationTaskCreator.graphql');

export const useTaskCreator = () => {
    const [ _create, { error }] = useMutation(mutationTaskCreator);
    const history = useHistory();

    const createTask = async task => {
        try {
            const { data } = await _create({
                variables: {
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
        createTask,
    };
};
