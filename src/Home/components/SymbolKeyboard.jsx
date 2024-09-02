import React, { useState } from 'react';
import './symbolKeyboard.css';

const allSymbols = {
    popular: ['★', '❤', '✔', '✈', '☎', '♛', '☼', '♚', '⚽', '⚾', '♪', '♫', '✿'],
    emojis: ['❤', '☎', '⚽', '♪', '♫', '✿', '★', '❣', '✉', '✈'],
    symbols: ['✏', '✒', '✠', '✝', '✞', '✿', '✣', '✤', '✢', '✧', '❆', '❄'],
    all: [] // We'll populate this array with all symbols combined
};

// Combine all symbols into the 'all' category
allSymbols.all = [
    ...allSymbols.popular,
    ...allSymbols.emojis,
    ...allSymbols.symbols,
];

const SymbolKeyboard = ({ onSelectSymbol }) => {
    const [filteredSymbols, setFilteredSymbols] = useState(allSymbols.all); // Default to 'all'

    const handleFilterChange = (category) => {
        setFilteredSymbols(allSymbols[category]);
    };

    return (
        <>
        <div className="symbol-keyboard">
            {/* Filter Buttons */}
            <div className="filter-buttons d-flex justify-content-center mb-3">
                <button onClick={() => handleFilterChange('all')} className="filter-button">All</button>
                <button onClick={() => handleFilterChange('popular')} className="filter-button">Popular</button>
                <button onClick={() => handleFilterChange('emojis')} className="filter-button">Emojis</button>
                <button onClick={() => handleFilterChange('symbols')} className="filter-button">Symbols</button>
            </div>

        </div>
            {/* Displaying Filtered Symbols */}
            <div className="symbol-container pb-5 align-items-center">
                {filteredSymbols.map((symbol, index) => (
                    <button
                        key={index}
                        className="symbol-button"
                        onClick={() => onSelectSymbol(symbol)}
                    >
                        {symbol}
                    </button>
                ))}
            </div>
        </>
    );
};

export default SymbolKeyboard;
