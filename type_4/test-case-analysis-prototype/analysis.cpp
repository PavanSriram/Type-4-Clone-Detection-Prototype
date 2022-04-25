// #include <bits/stdc++.h>
// using namespace std;

// vector<pair<vector<string>, vector<string>>> data_set;
// int test_case_count = 1;
// int total_match_count = 0;

// int main(int argc, char *argv[])
// {

//     string language_1 = argv[1];
//     string language_2 = argv[2];
//     string program_1 = argv[3];
//     string program_2 = argv[4];
//     string input_filename_1 = program_1 + "." + language_1;
//     string input_filename_2 = program_2 + "." + language_2;
//     cout << language_1 << " " << language_2 << " " << input_filename_1 << " " << input_filename_2 << endl;

//     for (int i = 1; i <= test_case_count; i++)
//     {
//         string test_filename = "test-case-" + to_string(i) + ".txt";
//         pair<vector<string>, vector<string>> temp;
//         // for language-1
//         if (language_1 == "cpp")
//         {
//             string command = "g++ " + input_filename_1 + " -o " + program_1;
//             string execute = program_1;

//             // cout << command << " " << execute << endl;

//             system(command.c_str());
//             system(execute.c_str());
//             // cout << "hi cpp" << endl;
//             fstream file;
//             string word, t, q, filename;
//             vector<string> fileInputs;
//             filename = "output.txt";
//             file.open(filename.c_str());

//             while(getline(file, word)){
//                 fileInputs.push_back(word);
//             }
//             temp.first = fileInputs;
//         }

//         // for language-2
//         if (language_2 == "py")
//         {
//             string command = "python -u " + input_filename_2;
//             system(command.c_str());
//             // cout << "hi py" << endl;
//             fstream file;
//             string word, t, q, filename;
//             vector<string> fileInputs;
//             filename = "output.txt";
//             file.open(filename.c_str());
//             while (getline(file, word))
//             {
//                 fileInputs.push_back(word);
//             }
//             temp.second = fileInputs;
//         }
//         data_set.push_back(temp);

//     }

//     // cout << endl <<"************** DATA SET ****************" << endl << endl;
//     for(int i=0; i<data_set.size(); i++){
//         pair<vector<string>, vector<string>> temp;
//         temp = data_set[i];
//         cout << i+1 << ":" << endl;
//         for(int j=0; j<temp.first.size(); j++){
//             cout << temp.first[j] << " ";
//         }
//         cout << endl;
//         for(int j=0; j<temp.second.size(); j++){
//             cout << temp.second[j] << " ";
//         }
//         cout << endl;
//     }

//     // cout << endl <<"************** MATCH PROBABILITY ****************" << endl << endl;
//     for(int i=0; i<data_set.size(); i++){
//         pair<vector<string>, vector<string>> temp;
//         temp = data_set[i];
//         if(temp.first == temp.second){
//             total_match_count++;
//         }
//     }

//     cout << total_match_count << "<---->" << test_case_count << endl;

//     float match_probability = (total_match_count*100/(test_case_count+0.0));

//     cout << endl << "Match Probability: " << match_probability << "%" << endl;

//     return 0;
// }























#include <bits/stdc++.h>
using namespace std;

vector<pair<vector<string>, vector<string>>> data_set;
int test_case_count = 1;
int total_match_count = 0;

int main(int argc, char** argv)
{
    string language_1 = argv[1];
    string language_2 = argv[2];
    string input_filename_1 = argv[3];
    string input_filename_2 = argv[4];
    
    for (int i = 1; i <= test_case_count; i++)
    {
        string test_filename = "test-case-" + to_string(i) + ".txt";
        pair<vector<string>, vector<string>> temp;
        // for language-1
        if (language_1 == "cpp")
        {
            system("g++ ../test-case-analysis-prototype/MergeSort.cpp -o ../test-case-analysis-prototype/MergeSort");
            
            cout << "Bavunnava" << endl;

            system("cd ../test-case-analysis-prototype && MergeSort");

            // system("mkdir Bokka3");

            cout << "hi cpp" << endl;
            fstream file;
            string word, t, q, filename;
            vector<string> fileInputs;
            filename = "../test-case-analysis-prototype/output.txt";
            file.open(filename.c_str());
            while (file >> word)
            {
                fileInputs.push_back(word);
            }
            temp.first = fileInputs;
        }

        // for language-2
        if (language_2 == "py")
        {
            system("python -u ../test-case-analysis-prototype/ReverseArray.py");
            
            // system("mkdir Bokka2");
            cout << "hi py" << endl;
            fstream file;
            string word, t, q, filename;
            vector<string> fileInputs;
            filename = "../test-case-analysis-prototype/output.txt";
            file.open(filename.c_str());
            while (file >> word)
            {
                fileInputs.push_back(word);
            }
            temp.second = fileInputs;
        }
        data_set.push_back(temp);
    }

    cout << endl <<"************** DATA SET ****************" << endl << endl;
    for(int i=0; i<data_set.size(); i++){
        pair<vector<string>, vector<string>> temp;
        temp = data_set[i];
        cout << i+1 << ":" << endl;
        for(int j=0; j<temp.first.size(); j++){
            cout << temp.first[j] << " ";
        }
        cout << endl;
        for(int j=0; j<temp.second.size(); j++){
            cout << temp.second[j] << " ";
        }
        cout << endl;
    }

    cout << endl <<"************** MATCH PROBABILITY ****************" << endl << endl;
    for(int i=0; i<data_set.size(); i++){
        pair<vector<string>, vector<string>> temp;
        temp = data_set[i];
        if(temp.first == temp.second){
            total_match_count++;
        }
    }

    cout << total_match_count << "<---->" << test_case_count << endl;

    float match_probability = (total_match_count/(test_case_count+0.0));

    cout << "Match Probability: " << match_probability << "%" << endl;

    return 0;
}