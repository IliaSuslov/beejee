import React from 'react'
import { Pagination } from 'react-bootstrap'
import { useStoreon } from 'storeon/react'

const MyPag = () => {
    const { dispatch, app } = useStoreon('app')
    let total = app.total_task_count
    let active = app.page
    let limit = app.limit
    let items = [];
    for (let number = 1; number <= Math.ceil(total / limit); number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => dispatch('tasks/changed', { page: number })}
            >
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination style={{ margin: 5 }}>{items}</Pagination>
    )
}
export default MyPag