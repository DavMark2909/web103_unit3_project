const eventsData = [
    {
        "id": 1,
        "name": "Tech Innovation Summit",
        "description": "Join industry leaders for a day of cutting-edge technology discussions and networking",
        "date": "2025-11-15",
        "location": "New York",
        "image": "https://imgs.search.brave.com/ONEEYrYHpl6_srxXjfpFnXlm2D1FLPmTATbIACFTHRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGVjaHN1/bW1pdC50ZWNoL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzAz/L1RlY2gtU3VtbWl0/LUV2ZW50LTcuanBn/P2ZpdD03MjAsMzkw/JnNzbD0x",
        "attendees": 350
    },
    {
        "id": 2,
        "name": "Startup Pitch Night",
        "description": "Watch promising startups pitch their ideas to top investors",
        "date": "2025-10-22",
        "location": "New York",
        "image": "https://imgs.search.brave.com/n_3qq-VadZEFWFVyu3kntJsyGViKq8xrWWN3cT8ITow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubHVtYWNkbi5j/b20vY2RuLWNnaS9p/bWFnZS9mb3JtYXQ9/YXV0byxmaXQ9Y292/ZXIsZHByPTIsYmFj/a2dyb3VuZD13aGl0/ZSxxdWFsaXR5PTc1/LHdpZHRoPTQwMCxo/ZWlnaHQ9NDAwL2V2/ZW50LWNvdmVycy8w/Mi8zYzMxYTVkMS1i/NzVlLTQ0ZmQtYjcw/Zi1mMjFhNDFlODM0/OTYucG5n",
        "attendees": 120
    },
    {
        "id": 3,
        "name": "Summer Music Festival",
        "description": "Three days of live music featuring top artists from around the world",
        "date": "2025-12-01",
        "location": "Los Angeles",
        "image": "https://imgs.search.brave.com/Pf5IJjSfWoaR9t08H8Y8N0ZaLVH07d7SOiLjvFbu4rA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcx/NzEyMDgxL2VzL2Zv/dG8vZnJpZW5kcy13/aXRoLWFybXMtaW4t/dGhlLWFpci1hdC1m/ZXN0aXZhbC1jb25j/ZXJ0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1nMmV0d1hR/SzBMaVhJUDhfc0l3/QURhNjQzNG5tc3hX/RTJ4Q1Zici10bDFr/PQ",
        "attendees": 5000
    },
    {
        "id": 4,
        "name": "Independent Film Screening",
        "description": "Exclusive premiere of award-winning independent films",
        "date": "2025-10-18",
        "location": "Los Angeles",
        "image": "https://imgs.search.brave.com/u6jok_wk_-1bLSVmEfoIDh5tIg-y6ON4q3e8L-Ugt40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/OTczMDY5MS9waG90/by9jaW5lbWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVpa/MG0tLVU2NzdEUnNO/U2hfelpGUENEZHlV/YUlTVDZBWENzbnR4/aEQ3dnc9",
        "attendees": 200
    },
    {
        "id": 5,
        "name": "Food & Wine Expo",
        "description": "Taste cuisine from renowned chefs and sample premium wines",
        "date": "2025-11-08",
        "location": "Chicago",
        "image": "https://imgs.search.brave.com/YGnoybfV7dGn52nn9KEQdyTHgss_-65RFT61Nlm_ZjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGFuZGRyaW5r/ZXhwby5jby51ay9t/ZWRpYS9jYWNoZS9t/b2RfbGF0ZXN0bmV3/c2VuaGFuY2VkL3Ro/dW1iXzIyNl8yMDYu/anBnPzgwZjQwYmU0/M2QxODI1YzRmNmQ3/OGI0NTI0OWYxOTVh",
        "attendees": 1200
    },
    {
        "id": 6,
        "name": "Business Networking Mixer",
        "description": "Connect with professionals and expand your business network",
        "date": "2025-10-25",
        "location": "Chicago",
        "image": "https://imgs.search.brave.com/O3F4L1MKSUj0bNA4xscvjRIq0uk2QUR7rEDohDhEgmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tdWx0aWV0aG5p/Yy1ncm91cC1idXNp/bmVzcy1wZW9wbGUt/dGFsa2luZy1vZmZp/Y2UtYnJlYWstdGVh/bXdvcmstY29uY2Vw/dF8zODYxODUtOTkw/MC5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA",
        "attendees": 300
    },
    {
        "id": 7,
        "name": "Beach Volleyball Championship",
        "description": "Professional beach volleyball tournament with prizes",
        "date": "2025-11-20",
        "location": "Miami",
        "image": "https://imgs.search.brave.com/i6fj8Xg8NLbIti9t9MkLVMeaxVcqXXraOQsa2rHTiX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92Ym0t/bWVkaWEuczMudXMt/ZWFzdC0yLmFtYXpv/bmF3cy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDUv/MDkwOTQxNTMvTkNB/QS1CZWFjaC1Wb2xs/ZXliYWxsLUNoYW1w/aW9uc2hpcC0yNDA1/MDUtMDQ4NjMuanBn",
        "attendees": 450
    },
    {
        "id": 8,
        "name": "Contemporary Art Gallery Opening",
        "description": "Opening night of modern art exhibition featuring local artists",
        "date": "2025-10-30",
        "location": "Miami",
        "image": "https://imgs.search.brave.com/i0T4pFZy60vsvs2-tsH9zuWLHsRxNr_1VhSsxNp-5a0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI5LzA2Lzc4/LzM2MF9GXzYyOTA2/NzgyM183MGxSUmNy/aEdvY2JTcmFRWFAy/ZmxqeGFhNFBPWGdx/Sy5qcGc",
        "attendees": 180
    },
    {
        "id": 9,
        "name": "Coffee Roasting Workshop",
        "description": "Learn the art of coffee roasting from master baristas",
        "date": "2025-11-12",
        "location": "Seattle",
        "image": "https://imgs.search.brave.com/rMQcf4XytlkkEXOE_h9_7JJIZRb0mLczdAMimGIsNvU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/cmVzaGx5LWdyb3Vu/ZC1jb2ZmZWUtYmVh/bnMtZnVlbC1iYXJp/c3RhLXdvcmtzaG9w/LWdlbmVyYXRlZC1i/eS1haV8xODg1NDQt/NDUzMTQuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA",
        "attendees": 60
    },
    {
        "id": 10,
        "name": "Gaming Convention",
        "description": "The ultimate gaming experience with tournaments and game demos",
        "date": "2025-12-05",
        "location": "Seattle",
        "image": "https://imgs.search.brave.com/giGt64TFTc79QiqvFcX_egOD-d_X3JWFghrkCyQVv4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjE1/MjIxNTAwL3Bob3Rv/L2NvbXB1dGVyLWdh/bWUtcGxheWVycy1h/dC1sYW4tcGFydHkt/Y29tcHV0ZXItZ2Ft/ZS10b3VybmFtZW50/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1EQnZHQmlMMURX/NTY0NkgteG5hdkVD/Q1pwdll3TktVMDdm/dTdSRHhPWm5zPQ",
        "attendees": 3500
    }
];

export default eventsData;