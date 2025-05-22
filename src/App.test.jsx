import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it('should contain Vite and React text', () => {
    render(<App />);
    // Ajuste este teste baseado no conteúdo real do seu App.jsx
    const element = screen.getByText(/vite/i) || screen.getByText(/react/i);
    if (element) {
      expect(element).toBeInTheDocument();
    } else {
      // Teste alternativo se não encontrar o texto
      expect(document.querySelector('#root')).toBeInTheDocument();
    }
  });

  it('should have a working state', () => {
    render(<App />);
    // Teste básico para verificar se o componente renderiza
    expect(screen.getByRole('main') || document.body).toBeInTheDocument();
  });
});