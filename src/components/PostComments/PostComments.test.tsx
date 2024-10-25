import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar "Comentário 1" na lista', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Comentário 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Comentário 1')).toBeInTheDocument()
    })

    test('Deve adicionar "Comentário 2" na lista', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Comentário 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Comentário 2')).toBeInTheDocument()
    })
});