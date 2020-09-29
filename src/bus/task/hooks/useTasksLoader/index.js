// Core
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/react-hooks';

// Queries
const queryTasks = loader('./gql/queryTasksLoader.graphql');

export const useTasksLoader = () => {
    const { data, refetch, loading } = useQuery(queryTasks);

    return {
        refetch,
        loading,
        tasks: data && data.tasks
    }
}
