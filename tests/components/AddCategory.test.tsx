import React from 'react';
import { describe, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../../src/components/AddCategory';

describe('AddCategory', () => {
  test('should change the text box value', () => {
    render(<AddCategory setCategories={() => {}} />);
    const input: HTMLInputElement = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Berserk' } });

    expect(input.value).toBe('Berserk');
  });

  test('should handle the form submit if the text value has more than 3 characters', () => {
    const inputValue = 'Berserk';
    const onSubmit = vi.fn();

    render(<AddCategory setCategories={onSubmit} />);

    const input: HTMLInputElement = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledOnce();
  });
});
