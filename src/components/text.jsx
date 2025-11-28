import React from 'react';

export default function FeaturedIn() {
  const brands = [
    'BuzzFeed',
    'PureWow.',
    'BRIT+CO',
    'POPSUGAR.',
    'THE EVERYGIRL',
    'kitchn',
  ];

  return (
    <div className="container text-center py-5">
      {/* Title */}
      <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#f4b942', letterSpacing: '1px' }}>
        As Seen In
      </h6>

      {/* Brand Names */}
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
        {brands.map((brand, index) => (
          <div
            key={index}
            style={{
              fontSize: '1.3rem',
              color: '#888',
              fontWeight: brand === 'BuzzFeed' || brand === 'BRIT+CO' ? '700' : '400',
              fontFamily:
                brand === 'PureWow.'
                  ? 'cursive'
                  : brand === 'kitchn'
                  ? '"Segoe UI", sans-serif'
                  : 'sans-serif',
              letterSpacing: brand === 'POPSUGAR.' ? '4px' : 'normal',
            }}
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}
