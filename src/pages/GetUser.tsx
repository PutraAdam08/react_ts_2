import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const getUsers = {
    method: 'GET',
    header: {
        accept: 'application/json'
    }
}

const GetUser = () => {
    const fetchUsers = async() => {
        try {
            const endpoint = `${API_URL}/users`;
            const response = await fetch(endpoint, getUsers);

            if(!response.ok) throw new Error('Failed to fetch product');
            
            const data = await response.json();


            console.log(data);
        } catch (error){
            console.error(`Error fetching user: ${error}`)
        }
    }

    useEffect(() => {
        fetchUsers();
    } ,[]);

    return (
        <>
        </>
    );
}

/**
 * 0
: 
{address: {…}, id: 1, email: 'john@gmail.com', username: 'johnd', password: 'm38rmF$', …}
1
: 
{address: {…}, id: 2, email: 'morrison@gmail.com', username: 'mor_2314', password: '83r5^_', …}
2
: 
{address: {…}, id: 3, email: 'kevin@gmail.com', username: 'kevinryan', password: 'kev02937@', …}
3
: 
{address: {…}, id: 4, email: 'don@gmail.com', username: 'donero', password: 'ewedon', …}
4
: 
{address: {…}, id: 5, email: 'derek@gmail.com', username: 'derek', password: 'jklg*_56', …}
5
: 
{address: {…}, id: 6, email: 'david_r@gmail.com', username: 'david_r', password: '3478*#54', …}
6
: 
{address: {…}, id: 7, email: 'miriam@gmail.com', username: 'snyder', password: 'f238&@*$', …}
7
: 
{address: {…}, id: 8, email: 'william@gmail.com', username: 'hopkins', password: 'William56$hj', …}
8
: 
{address: {…}, id: 9, email: 'kate@gmail.com', username: 'kate_h', password: 'kfejk@*_', …}
9
: 
{address: {…}, id: 10, email: 'jimmie@gmail.com', username: 'jimmie_k', password: 'klein*#%*', …}
 */

export default GetUser;