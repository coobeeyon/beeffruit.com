# Use the official PyTorch image as the base image
FROM pytorch/pytorch:latest

# Install Jupyter and other dependencies
RUN pip install jupyter ipykernel

WORKDIR /workspace

# Set the command to start Jupyter Notebook
CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]
