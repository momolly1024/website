print('hello')

# import gspread
# from oauth2client.service_account import ServiceAccountCredentials as SAC
# from typing import Optional
# from fastapi import FastAPI
# from pydantic import BaseModel
# Json = "你的JSON檔名.json"
# Url = ["https://spreadsheets.google.com/feeds"]
# Connect = SAC.from_json_keyfile_name(Json, Url)
# GoogleSheets = gspread.authorize(Connect)
# Sheet = GoogleSheets.open_by_key("你的sheet KEY")
# Sheets = Sheet.sheet1
# # ----- fast api -----
# app = FastAPI()
# @app.get("/")
# def getAllData():
#     return Sheets.get_all_records()
# class Info(BaseModel):
#     id: int
#     data: list
# @app.post("/addNewEvents")
# def getInformation(info: Info):
#     Sheets.append_row(info.data)
#     return {"status": "SUCCESS", "data": info}


# uvicorn main:app --reload