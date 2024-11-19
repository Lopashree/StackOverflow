import React from 'react';

const MainContent = () => {
    const questions = [
        {
            title: 'I am not able to use view binding in activity in Kotlin android...',
            tags: ['Android', 'Kotlin', 'Android-Activity', 'Companion-Object'],
        },
        {
            title: 'I am not able to use view binding in activity in Kotlin android...',
            tags: ['Android', 'Kotlin', 'Android-Activity', 'Companion-Object'],
        },
        {
            title: 'I am not able to use view binding in activity in Kotlin android...',
            tags: ['Android', 'Kotlin', 'Android-Activity', 'Companion-Object'],
        },
    ];

    return (
        <main className="main-content">
            <h3>Top Questions</h3>
            {questions.map((q, index) => (
                <div key={index} className="question-card">
                    <h5>{q.title}</h5>
                    <div className="tags">
                        {q.tags.map((tag, idx) => (
                            <span key={idx} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
};

export default MainContent;
