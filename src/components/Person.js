import React from 'react'

export const Person = ({person}) => {
    return (
        <>
            <h2 key={person.id}>Iam {person.name}.Iam {person.age} years old. I know {person.skill}</h2>
        </>
    )
}
