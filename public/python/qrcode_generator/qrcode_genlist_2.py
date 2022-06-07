# pip install xlrd - Used to extract data from a spreadsheet

# Reading an excel file using python
import xlrd

# Location of the excel file
loc = ("boxandloc.xlsx")

# Open workbook
wb = xlrd.open_workbook(loc)
sheet = wb.sheet_by_index(0)

# for row 0 and column 0
print(sheet.cell_value(0,0))