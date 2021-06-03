import React from 'react';
import theme from 'theme';

/**
 * Envelope (message) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const ShareIcon = ({ width, color }) => {
    const DEFAULT_WIDTH = '18';
    const DEFAULT_COLOR = theme.colors.text.secondary;

    return (
        <svg
            width={width || DEFAULT_WIDTH}
            fill={theme.colors[color] || DEFAULT_COLOR}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
    );
};









