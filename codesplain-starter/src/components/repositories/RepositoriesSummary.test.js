import { render, screen } from '@testing-library/react';
import RepositoriesSummary from "./RepositoriesSummary";

test('displays the primary language about repository', () => {
    const repository = {
        language: 'Javascript',
        stargazers_count: 100,
        forks: 50,
        open_issues: 20,
    }

    render(<RepositoriesSummary repository={repository} />);
    for (let key in repository) {
        expect(screen.getByText(new RegExp(repository[key]))).toBeInTheDocument();
    }
})