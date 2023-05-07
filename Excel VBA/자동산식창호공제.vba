Function autoCalculate(oldMathExp As String) As String
    Dim newMathExp As String, c As String, i As Integer
    newMathExp = "="
    For i = 1 To Len(oldMathExp)
        c = Mid(oldMathExp, i, 1)
        If InStr("0123456789+-*/.()", c) Then
            newMathExp = newMathExp & c
        End If
    Next i
    autoCalculate = newMathExp
End Function

Function subWindow(oldMathExp As String) As String
    Dim newMathExp As String, c As String, i As Integer, isValid As Boolean
    isValid = False
    newMathExp = "="
    For i = 1 To Len(oldMathExp)
        c = Mid(oldMathExp, i, 1)
        If isValid And InStr("0123456789+-*/.()", c) Then
            newMathExp = newMathExp & c
        ElseIf c = "=" Then
            isValid = True
        ElseIf c = "," Then
            isValid = False
            newMathExp = newMathExp & "+"
        End If
    Next i
    subWindow = newMathExp
End Function

Sub calculateGood()
    Dim selectedRange As Range, cell As Range
    Set selectedRange = Selection ' 선택된 범위를 가져옴
    If MsgBox("아래 영문에 해당하는 연산이 적용됩니다." & vbCrLf & "cal - 자동산식" & vbCrLf & "win - 창호공제", vbOKCancel) = 2 Then
        Exit Sub
    End If
    For Each cell In selectedRange.Cells
        If cell.Offset(0, 1).Value = "cal" Then
            cell.Offset(0, 1).Value = autoCalculate(cell.Value) ' 자동산식
        ElseIf cell.Offset(0, 1).Value = "win" Then
            cell.Offset(0, 1).Value = subWindow(cell.Value) ' 창호공제
        End If
    Next cell
End Sub