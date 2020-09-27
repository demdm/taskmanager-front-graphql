// Core
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/react-hooks';

// Queries
const queryTasks = loader('./gql/queryTasksLoader.graphql');

export const useTasksLoader = () => {
    const { data, error } = useQuery(queryTasks);

    return {
        error,
        tasks: data && data.tasks
    }
}
