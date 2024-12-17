import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from "./button.tsx";

describe('Button Component', () => {
    test('должен отображать текст кнопки', () => {
        render(<Button onClick={() => {}}>Нажми меня</Button>);
        expect(screen.getByText('Нажми меня')).toBeInTheDocument();
    });

    test('должен вызывать onClick при клике', () => {
        const onClick = jest.fn(); // мок-функция для проверки вызова
        render(<Button onClick={onClick}>Клик</Button>);

        const button = screen.getByText('Клик');
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1); // Проверяем, что функция вызвана 1 раз
    });
});