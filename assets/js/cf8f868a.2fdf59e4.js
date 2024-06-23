"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[581],{4594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(4848),s=n(8453);n(6540);const i=e=>{let{children:t,color:n}=e;return(0,a.jsx)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0.2rem 0.5rem",fontWeight:"bold"},children:t})},r={title:"Experiment #1",sidebar_position:1},o=void 0,l={id:"ml-experiment/mlx",title:"Experiment #1",description:"Recommending Popular Electricity Plans to a New Resident",source:"@site/docs/ml-experiment/mlx.mdx",sourceDirName:"ml-experiment",slug:"/ml-experiment/mlx",permalink:"/docs/ml-experiment/mlx",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ml-experiment/mlx.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Experiment #1",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ML Experiments",permalink:"/docs/category/ml-experiments"}},d={},c=[{value:"Recommending Popular Electricity Plans to a New Resident",id:"recommending-popular-electricity-plans-to-a-new-resident",level:2},{value:"Summary of Libraries and Methods",id:"summary-of-libraries-and-methods",level:2},{value:"<Tag>pandas (pd)</Tag>",id:"pandas-pd",level:3},{value:"<Tag>pd.read_csv</Tag> : <em>Reads a CSV file into a DataFrame.</em>",id:"pdread_csv--reads-a-csv-file-into-a-dataframe",level:6},{value:"<Tag>DataFrame.groupby</Tag>: <em>Groups data by specified columns.</em>",id:"dataframegroupby-groups-data-by-specified-columns",level:6},{value:"<Tag>DataFrame.pivot</Tag>: <em>Pivots the DataFrame to reshape it.</em>",id:"dataframepivot-pivots-the-dataframe-to-reshape-it",level:6},{value:"<Tag>DataFrame.fillna</Tag>: <em>Fills missing values.</em>",id:"dataframefillna-fills-missing-values",level:6},{value:"<Tag>sklearn (train_test_split)</Tag>",id:"sklearn-train_test_split",level:3},{value:"<Tag>train_test_split</Tag> : <em>Splits data into training and testing sets.</em>",id:"train_test_split--splits-data-into-training-and-testing-sets",level:6},{value:"<Tag>torch (torch)</Tag>",id:"torch-torch",level:3},{value:"<Tag>torch.tensor</Tag> : <em>Converts data to a PyTorch tensor.</em>",id:"torchtensor--converts-data-to-a-pytorch-tensor",level:6},{value:"<Tag>torch.no_grad</Tag> : <em>Disables gradient calculations (useful during evaluation).</em>",id:"torchno_grad--disables-gradient-calculations-useful-during-evaluation",level:6},{value:"<Tag>torch.nn (nn)</Tag>",id:"torchnn-nn",level:3},{value:"<Tag>nn.Module</Tag> : <em>Base class for all neural network modules.</em>",id:"nnmodule--base-class-for-all-neural-network-modules",level:6},{value:"<Tag>nn.Embedding</Tag> : <em>Creates an embedding layer for discrete variables.</em>",id:"nnembedding--creates-an-embedding-layer-for-discrete-variables",level:6},{value:"<Tag>nn.MSELoss</Tag> : <em>Mean Squared Error loss function.</em>",id:"nnmseloss--mean-squared-error-loss-function",level:6},{value:"<Tag>torch.optim (optim)</Tag>",id:"torchoptim-optim",level:3},{value:"<Tag>optim.Adam</Tag> : <em>Adam optimizer for updating model parameters.</em>",id:"optimadam--adam-optimizer-for-updating-model-parameters",level:6},{value:"<Tag>torch.utils.data (Dataset, DataLoader)</Tag>",id:"torchutilsdata-dataset-dataloader",level:3},{value:"<Tag>Dataset</Tag> : <em>Abstract class representing a dataset.</em>",id:"dataset--abstract-class-representing-a-dataset",level:6},{value:"<Tag>DataLoader</Tag> : <em>Provides an iterable over the dataset.</em>",id:"dataloader--provides-an-iterable-over-the-dataset",level:6},{value:"Step 1: Data Preparation",id:"step-1-data-preparation",level:2},{value:"Step 2: Model Selection",id:"step-2-model-selection",level:2},{value:"Step 3: Training the Model",id:"step-3-training-the-model",level:2},{value:"Step 4: Evaluation",id:"step-4-evaluation",level:2},{value:"Step 5: Deployment",id:"step-5-deployment",level:2}];function h(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h6:"h6",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.admonition,{title:"\xa0",type:"info",children:[(0,a.jsx)(t.h2,{id:"recommending-popular-electricity-plans-to-a-new-resident",children:"Recommending Popular Electricity Plans to a New Resident"}),(0,a.jsx)(t.p,{children:"As part of our web service, we aim to provide new residents with information on popular electricity plans in their area. Our dataset includes data from over 50,000 customers for each given zip code, allowing us to identify the two most popular electricity plans among residents."}),(0,a.jsx)(t.p,{children:"When a new resident visits our website and enters their zip code, we want to present them with the two most popular electricity plans in that area. The new resident can then decide whether they want to learn more about these plans or explore other options."})]}),"\n","\n",(0,a.jsx)(t.h2,{id:"summary-of-libraries-and-methods",children:"Summary of Libraries and Methods"}),"\n",(0,a.jsxs)(t.admonition,{title:"\ud83d\udce6",type:"note",children:[(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h3,{id:"pandas-pd",children:(0,a.jsx)(i,{color:"#FF5733",children:"pandas (pd)"})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"pdread_csv--reads-a-csv-file-into-a-dataframe",children:[(0,a.jsx)(i,{color:"#697476",children:"pd.read_csv"})," : ",(0,a.jsx)(t.em,{children:"Reads a CSV file into a DataFrame."})]}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"dataframegroupby-groups-data-by-specified-columns",children:[(0,a.jsx)(i,{color:"#697476",children:"DataFrame.groupby"}),": ",(0,a.jsx)(t.em,{children:"Groups data by specified columns."})]}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"dataframepivot-pivots-the-dataframe-to-reshape-it",children:[(0,a.jsx)(i,{color:"#697476",children:"DataFrame.pivot"}),": ",(0,a.jsx)(t.em,{children:"Pivots the DataFrame to reshape it."})]}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"dataframefillna-fills-missing-values",children:[(0,a.jsx)(i,{color:"#697476",children:"DataFrame.fillna"}),": ",(0,a.jsx)(t.em,{children:"Fills missing values."})]}),"\n"]}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h3,{id:"sklearn-train_test_split",children:(0,a.jsx)(i,{color:"#FF5733",children:"sklearn (train_test_split)"})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"train_test_split--splits-data-into-training-and-testing-sets",children:[(0,a.jsx)(i,{color:"#697476",children:"train_test_split"})," : ",(0,a.jsx)(t.em,{children:"Splits data into training and testing sets."})]}),"\n"]}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h3,{id:"torch-torch",children:(0,a.jsx)(i,{color:"#FF5733",children:"torch (torch)"})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"torchtensor--converts-data-to-a-pytorch-tensor",children:[(0,a.jsx)(i,{color:"#697476",children:"torch.tensor"})," : ",(0,a.jsx)(t.em,{children:"Converts data to a PyTorch tensor."})]}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"torchno_grad--disables-gradient-calculations-useful-during-evaluation",children:[(0,a.jsx)(i,{color:"#697476",children:"torch.no_grad"})," : ",(0,a.jsx)(t.em,{children:"Disables gradient calculations (useful during evaluation)."})]}),"\n"]}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h3,{id:"torchnn-nn",children:(0,a.jsx)(i,{color:"#FF5733",children:"torch.nn (nn)"})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"nnmodule--base-class-for-all-neural-network-modules",children:[(0,a.jsx)(i,{color:"#697476",children:"nn.Module"})," : ",(0,a.jsx)(t.em,{children:"Base class for all neural network modules."})]}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"nnembedding--creates-an-embedding-layer-for-discrete-variables",children:[(0,a.jsx)(i,{color:"#697476",children:"nn.Embedding"})," : ",(0,a.jsx)(t.em,{children:"Creates an embedding layer for discrete variables."})]}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"nnmseloss--mean-squared-error-loss-function",children:[(0,a.jsx)(i,{color:"#697476",children:"nn.MSELoss"})," : ",(0,a.jsx)(t.em,{children:"Mean Squared Error loss function."})]}),"\n"]}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h3,{id:"torchoptim-optim",children:(0,a.jsx)(i,{color:"#FF5733",children:"torch.optim (optim)"})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"optimadam--adam-optimizer-for-updating-model-parameters",children:[(0,a.jsx)(i,{color:"#697476",children:"optim.Adam"})," : ",(0,a.jsx)(t.em,{children:"Adam optimizer for updating model parameters."})]}),"\n"]}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h3,{id:"torchutilsdata-dataset-dataloader",children:(0,a.jsx)(i,{color:"#FF5733",children:"torch.utils.data (Dataset, DataLoader)"})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"dataset--abstract-class-representing-a-dataset",children:[(0,a.jsx)(i,{color:"#697476",children:"Dataset"})," : ",(0,a.jsx)(t.em,{children:"Abstract class representing a dataset."})]}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h6,{id:"dataloader--provides-an-iterable-over-the-dataset",children:[(0,a.jsx)(i,{color:"#697476",children:"DataLoader"})," : ",(0,a.jsx)(t.em,{children:"Provides an iterable over the dataset."})]}),"\n"]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"step-1-data-preparation",children:"Step 1: Data Preparation"}),"\n",(0,a.jsx)(t.admonition,{title:"\ud83e\udd14",type:"danger",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"What we're doing"})})," : ",(0,a.jsx)(t.em,{children:"We're organizing and preparing your data so that we can train a machine learning model."}),"\n",(0,a.jsx)(t.em,{children:"Think of this as getting all your ingredients ready before you start cooking."})]})}),"\n",(0,a.jsxs)(t.admonition,{title:"\ud83d\ude2f",type:"tip",children:[(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Load your data"})}),": ",(0,a.jsx)(t.em,{children:"We read your dataset, which is a list of customers, their zip codes, and the electricity plans they use."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Group data"})}),": ",(0,a.jsx)(t.em,{children:"We count how many customers in each zip code use each electricity plan. This helps us see which plans are popular in each area."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Create a table"})}),": ",(0,a.jsx)(t.em,{children:"We make a table (like a big spreadsheet) where each row is a zip code, each column is a plan, and each cell shows how many customers use that plan in that zip code."})]}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["We ",(0,a.jsx)(t.code,{children:"load"})," the data using ",(0,a.jsx)(t.code,{children:"pandas"}),", which is like opening a spreadsheet."]})}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["We ",(0,a.jsx)(t.code,{children:"count"})," how many people use each plan in each ",(0,a.jsx)(t.code,{children:"zip code"}),"."]})}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["We create a ",(0,a.jsx)(t.code,{children:"matrix (table)"})," where ",(0,a.jsx)(t.code,{children:"rows"})," are ",(0,a.jsx)(t.code,{children:"zip codes"})," and ",(0,a.jsx)(t.code,{children:"columns"})," are ",(0,a.jsx)(t.code,{children:"plans"}),", with cells showing counts."]})}),"\n"]}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["We ",(0,a.jsx)(t.code,{children:"split"})," this data into training and testing sets."]})}),"\n"]})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import pandas as pd\nfrom sklearn.model_selection import train_test_split\nimport seaborn as sns   \nimport matplotlib.pyplot as plt\n\n# Load your dataset\n# data = pd.read_csv('your_dataset.csv')\n\n# Sample data (from the previous step)\ndata = {\n    'zip_code': [10001]*5 + [10002]*5 + [10003]*5 + [10004]*5,\n    'customer_id': range(1, 21),\n    'plan_id': [1, 2, 1, 2, 1, 3, 3, 4, 4, 4, 2, 2, 2, 3, 3, 1, 1, 1, 2, 2]\n}\n\n# Create a DataFrame\ndf = pd.DataFrame(data)\n\n# Assuming the dataset has columns: 'zip_code', 'customer_id', 'plan_id'\n# Group by zip_code and plan_id to get the count of \n# customers for each plan in each zip code\nplan_counts = df\n                .groupby(['zip_code', 'plan_id'])\n                .size()\n                .reset_index(name='count')\n\n# Pivot the data to create a matrix\nplan_matrix = plan_counts\n                .pivot(index='zip_code', columns='plan_id', values='count')\n                .fillna(0)\n\n # Plot the heatmap\n\n\n# Figure Size: plt.figure(figsize=(10, 6)) sets the size of the plot. \n# You can adjust the size as needed.\n\n# Heatmap:\n# sns.heatmap(plan_matrix, annot=True, fmt='g', cmap='viridis') creates the heatmap. \n# Here:\n#     plan_matrix is the data to be visualized.\n    \n#     annot=True adds the counts as annotations in the heatmap cells.\n    \n#     fmt='g' specifies the format of the annotations (general format).\n    \n#     cmap='viridis' sets the color map of the heatmap. \n#     You can choose other color maps like coolwarm, plasma, etc.\n\n# Titles and Labels: Adding titles and axis labels to make the plot informative.\n\n# Display: plt.show() displays the plot.\n\n# Split the data into training and testing sets\n\nplt.figure(figsize=(10, 6))  # Set the figure size\nsns.heatmap(plan_matrix, annot=True, fmt='g', cmap='viridis')  # Create the heatmap\n\n# Add titles and labels\nplt.title('Number of Customers per Plan by Zip Code')\nplt.xlabel('Plan ID')\nplt.ylabel('Zip Code')\n\n# Show the plot\nplt.show()\n\ntrain_data, test_data = train_test_split(plan_matrix, test_size=0.2, random_state=42)\n\n\n# Plot the heatmap for train_data\nplt.figure(figsize=(10, 6))  # Set the figure size\nsns.heatmap(train_data, annot=True, fmt='g', cmap='viridis')  # Create the heatmap\n\n# Add titles and labels\nplt.title('Train Data: Number of Customers per Plan by Zip Code')\nplt.xlabel('Plan ID')\nplt.ylabel('Zip Code')\n\n# Show the plot\nplt.show()\n\n\n# Plot the heatmap for test_data\nplt.figure(figsize=(10, 6))  # Set the figure size\nsns.heatmap(test_data, annot=True, fmt='g', cmap='viridis')  # Create the heatmap\n\n# Add titles and labels\nplt.title('Test Data: Number of Customers per Plan by Zip Code')\nplt.xlabel('Plan ID')\nplt.ylabel('Zip Code')\n\n# Show the plot\nplt.show()\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"step-2-model-selection",children:"Step 2: Model Selection"}),"\n",(0,a.jsx)(t.admonition,{title:"\ud83e\udd14",type:"danger",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"What we're doing"})})," : ",(0,a.jsx)(t.em,{children:"We're choosing a type of machine learning model that can learn patterns from our data."}),"\n",(0,a.jsx)(t.em,{children:'In this case, we use something called "matrix factorization," which is good for recommendation systems.'})]})}),"\n",(0,a.jsx)(t.admonition,{title:"\ud83d\ude2f",type:"tip",children:(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Define a dataset class"})}),": ",(0,a.jsx)(t.em,{children:"We create a special way to handle our data so it can be used for training the model."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Define the model"})}),": ",(0,a.jsx)(t.em,{children:"We set up a basic recommendation model. This model will learn how to predict which plans are popular based on the zip code."})]}),"\n"]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"\nimport torch  # Import PyTorch for building and training the model\nimport torch.nn as nn  # Import the neural network module from PyTorch\nimport torch.optim as optim  # Import optimizers from PyTorch\n# Import DataLoader and Dataset for handling data in PyTorch\nfrom torch.utils.data import DataLoader, Dataset  \n\n# Define a custom dataset class\nclass PlanRecommendationDataset(Dataset):\n    def __init__(self, data):\n         # Convert the DataFrame values to a PyTorch tensor\n        self.data = torch.tensor(data.values, dtype=torch.float32) \n    \n    def __len__(self):\n        return self.data.shape[0]  # Return the number of rows (zip codes)\n    \n    def __getitem__(self, idx):\n        return self.data[idx]  # Return the data at the specified index\n\n# Define the matrix factorization model\nclass MatrixFactorization(nn.Module):\n    def __init__(self, num_users, num_items, num_factors=10):\n        # Initialize the parent class\n        super(MatrixFactorization, self).__init__()  \n        # Create an embedding layer for users (zip codes)\n        self.user_factors = nn.Embedding(num_users, num_factors)  \n        # Create an embedding layer for items (plans)\n        self.item_factors = nn.Embedding(num_items, num_factors)  \n        \n    def forward(self, user, item):\n        # Compute the dot product of user and item factors\n        return (self.user_factors(user) * self.item_factors(item)).sum(1)  \n\n# Get the number of zip codes and plans\nnum_zip_codes, num_plans = train_data.shape\n\n# Create the dataset and dataloader\n# Create a dataset from the training data\ndataset = PlanRecommendationDataset(train_data)  \n# Create a dataloader to load the data in batches\ndataloader = DataLoader(dataset, batch_size=64, shuffle=True)  \n\n# Initialize the model, loss function, and optimizer\n# Create an instance of the model\nmodel = MatrixFactorization(num_zip_codes, num_plans)  \n# Use mean squared error as the loss function\ncriterion = nn.MSELoss()  \n# Use the Adam optimizer to update the model parameters\noptimizer = optim.Adam(model.parameters(), lr=0.01)  \n\n\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"step-3-training-the-model",children:"Step 3: Training the Model"}),"\n",(0,a.jsx)(t.admonition,{title:"\ud83e\udd14",type:"danger",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"What we're doing"})})," : ",(0,a.jsx)(t.em,{children:"We're teaching the model to understand the data."}),"\n",(0,a.jsx)(t.em,{children:"This is like showing many examples to a student so they can learn the pattern."})]})}),"\n",(0,a.jsx)(t.admonition,{title:"\ud83d\ude2f",type:"tip",children:(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Set up training"})}),": ",(0,a.jsx)(t.em,{children:"We split our data into small batches and feed these batches to the model."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Train"})}),": ",(0,a.jsx)(t.em,{children:"The model looks at the data, makes guesses about which plans are popular, and learns from its mistakes. It does this many times to get better."})]}),"\n"]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"num_epochs = 20  # Set the number of training epochs\n\n# Training loop\nfor epoch in range(num_epochs):\n    model.train()  # Set the model to training mode\n    total_loss = 0  # Initialize the total loss\n    \n    # Iterate over batches of data\n    for batch in dataloader:\n        # Clear the previous gradients\n        optimizer.zero_grad()  \n        # Convert the batch to long tensor for embedding lookup\n        batch = batch.to(torch.long)  \n        \n        # Create user and item indices\n        # Repeat each user index for each item\n        user_indices = torch.arange(num_zip_codes).repeat_interleave(num_plans)  \n        # Repeat each item index for each user\n        item_indices = torch.arange(num_plans).repeat(num_zip_codes)  \n        \n        # Make predictions\n        predictions = model(user_indices, item_indices)  # Get the model predictions\n        \n        # Compute the loss\n        loss = criterion(predictions, batch.view(-1))  # Calculate the loss\n        loss.backward()  # Backpropagate the loss\n        optimizer.step()  # Update the model parameters\n        \n        # Accumulate the total loss\n        total_loss += loss.item()  \n    \n    # Print the average loss for the epoch\n    # Print the loss for the epoch\n    print(f'Epoch {epoch+1}, Loss: {total_loss / len(dataloader)}')  \n\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"step-4-evaluation",children:"Step 4: Evaluation"}),"\n",(0,a.jsx)(t.admonition,{title:"\ud83e\udd14",type:"danger",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"What we're doing"})})," : ",(0,a.jsx)(t.em,{children:"What we're doing: We're checking how well the model has learned. This is like giving a student a test to see how well they understand the material."})]})}),"\n",(0,a.jsx)(t.admonition,{title:"\ud83d\ude2f",type:"tip",children:(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Set up evaluation"})}),": We use a separate part of the data that the model hasn't seen before."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Test the model"})}),": We see how well the model predicts the popular plans on this new data. If it does well, it means the model has learned useful patterns."]}),"\n"]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"\n# Set the model to evaluation mode\nmodel.eval()  # Set the model to evaluation mode\n\n# Disable gradient calculation\n# Disable gradient calculations for evaluation\nwith torch.no_grad():  \n    # Create a dataset from the test data\n    test_dataset = PlanRecommendationDataset(test_data)  \n    # Create a dataloader for the test data\n    test_dataloader = DataLoader(test_dataset, batch_size=64, shuffle=False)  \n    total_loss = 0  # Initialize the total loss\n    \n    # Iterate over batches of test data\n    for batch in test_dataloader:\n        # Convert the batch to long tensor\n        batch = batch.to(torch.long)  \n        \n        # Create user and item indices\n        # Repeat each user index for each item\n        user_indices = torch.arange(num_zip_codes).repeat_interleave(num_plans)  \n        # Repeat each item index for each user\n        item_indices = torch.arange(num_plans).repeat(num_zip_codes)  \n        \n        # Make predictions\n        # Get the model predictions\n        predictions = model(user_indices, item_indices)  \n        \n        # Compute the loss\n        # Calculate the loss\n        loss = criterion(predictions, batch.view(-1))  \n        # Accumulate the total loss\n        total_loss += loss.item()  \n    \n    # Print the average loss for the test data\n    # Print the test loss\n    print(f'Test Loss: {total_loss / len(test_dataloader)}')  \n\n\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"step-5-deployment",children:"Step 5: Deployment"}),"\n",(0,a.jsx)(t.admonition,{title:"\ud83e\udd14",type:"danger",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"What we're doing"})})," : ",(0,a.jsx)(t.em,{children:"We're putting the model to work. This means using the trained model to make recommendations on your website."})]})}),"\n",(0,a.jsx)(t.admonition,{title:"\ud83d\ude2f",type:"tip",children:(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Save the model"})}),": ",(0,a.jsx)(t.em,{children:"We save the trained model so we can use it later without training again."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Load and use the model"})}),": ",(0,a.jsx)(t.em,{children:"When a new resident visits your website and enters their zip code, the model looks at its learned patterns and suggests the two most popular plans for that zip code."})]}),"\n"]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"\n# Save the trained model\n# Save the model parameters to a file\ntorch.save(model.state_dict(), 'model.pth')  \n\n# Load the trained model for deployment\n# Create a new instance of the model\nmodel = MatrixFactorization(num_zip_codes, num_plans)  \nmodel.load_state_dict(torch.load('model.pth'))  # Load the saved model parameters\nmodel.eval()  # Set the model to evaluation mode\n\n# Function to get recommendations for a given zip code\ndef get_recommendations(zip_code_index):\n    # Disable gradient calculations\n    with torch.no_grad():  \n        # Convert the zip code index to a tensor\n        user_idx = torch.tensor([zip_code_index], dtype=torch.long)  \n        # Create a tensor with all plan indices\n        item_indices = torch.arange(num_plans)  \n         # Get the model predictions for the zip code\n        predictions = model(user_idx, item_indices) \n        # Get the indices of the top 2 plans\n        top_plans = torch.topk(predictions, k=2).indices  \n        # Convert the indices to a numpy array\n        return top_plans.numpy()  \n\n# Example usage\n# Replace with the actual index of the zip code\nzip_code_index = 0  \n# Print the recommended plans for the zip code\nprint(get_recommendations(zip_code_index)) \n\n\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(6540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);