if __name__ == "__main__":
    # Get user ID from command line argument
    user_id = sys.argv[1]
    recommendations = run_recommendation(user_id)

    # Print recommendations as JSON array
    print(json.dumps(recommendations))