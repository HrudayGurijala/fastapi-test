from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# Configure CORS to allow React frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React app's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/random-number")
async def get_random_number():
    # Generate a random number between 1 and 100
    random_number = random.randint(1, 100)
    return {"random_number": random_number}

# Run the app with uvicorn: uvicorn main:app --reload
