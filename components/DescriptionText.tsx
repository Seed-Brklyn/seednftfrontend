import { useState, useEffect } from 'react'

const DescriptionText = () => {
    const textAdded = ""

    return (
        <div className="container glo detailsBox">
            <div style={{ flex: '1 1 auto', color:'white' ,alignItems: 'center'}}>
                <div style={{ padding: '24px 24px 24px 0' }}>
                    <p style={{ margin: '12px 0 24px', fontSize: '72px', fontWeight: 'bold' }}>   
                        {textAdded}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DescriptionText;