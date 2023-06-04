import Link from 'next/link'
import React from 'react'

export default function ShortBrandNames({name}) {

    return (
        <Link href={`/${name}`} className="flex justify-between ">
            <p >{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</p>
        </Link>
    )
}

