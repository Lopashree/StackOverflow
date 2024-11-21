import React, { useState, useEffect } from 'react';
import activityData from '../data/activity.json';
import hotData from '../data/hot.json';
import monthData from '../data/month.json';
import weekData from '../data/week.json';

const MainContent = () => {
    const [questions, setQuestions] = useState([]);
    const [filter, setFilter] = useState('activity');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchQuestions = (filterType) => {
        try {
            setIsLoading(true);
            setError(null);

            let data;
            switch (filterType) {
                case 'activity':
                    data = activityData;
                    break;
                case 'hot':
                    data = hotData;
                    break;
                case 'week':
                    data = weekData;
                    break;
                case 'month':
                    data = monthData;
                    break;
                default:
                    data = hotData;
                    break;
            }

            setQuestions(data.items);
            setIsLoading(false);
        } catch (err) {
            console.error('Error fetching questions:', err);
            setError('Unable to load data.');
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestions(filter);
    }, [filter]);

    return (
        <main className="main-content">
            <div className='content-head'>
                <h3 style={{ letterSpacing: '2px', fontSize: '24px' }}>Top Questions</h3>

                {/* Filter Buttons */}
                <div className="main-filters">
                    <button onClick={() => setFilter('activity')} className={filter === 'activity' ? 'main-selected' : ''}>Activity</button>
                    <button onClick={() => setFilter('hot')} className={filter === 'hot' ? 'main-selected' : ''}>Hot</button>
                    <button onClick={() => setFilter('week')} className={filter === 'week' ? 'main-selected' : ''}>Week</button>
                    <button onClick={() => setFilter('month')} className={filter === 'month' ? 'main-selected' : ''}>Month</button>
                    <span>ASK QUESTION</span>
                </div>
            </div>

            {/* Display Loading, Error, or Questions */}
            {isLoading ? (
                <p>Loading questions...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                questions.map((q) => (
                    <div key={q.question_id} className="question-card">
                        <a href={q.link} target="_blank" rel="noopener noreferrer" className="question-link">
                            <h3>{q.title}</h3> </a>

                        {/* Render Tags */}
                        <div className="tags">
                            {q.tags.map((tag, idx) => (
                                <span key={idx} className="tag">{tag}</span>
                            ))}
                        </div>

                        {/* Additional Information */}
                        <div className="question-info">
                            <div className='question-icons'>
                                <p><i class="bi bi-triangle"></i> <strong>{q.score}</strong></p>
                                <p><i class="bi bi-chat-right-text"></i> <strong>{q.answer_count}</strong></p>
                                <p><i class="bi bi-eye"></i> <strong>{q.view_count}</strong></p>
                            </div>
                            <div className="owner-info">
                                <p>last activity on: <span style={{ textTransform: "uppercase" }}>{new Date(q.last_activity_date * 1000).toLocaleString()}</span>
                                    <a href={q.owner.link} target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;
                                        {q.owner.display_name}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </main>
    );
};

export default MainContent;
