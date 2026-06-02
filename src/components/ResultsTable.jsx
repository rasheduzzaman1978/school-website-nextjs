"use client";


import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";

const ResultsTable = ({ results, deleteResultAction }) => {

  const handleDelete = async (resultId) => {
    await deleteResultAction(resultId);
    
    };
    

  return (
    <Table variant="secondary">
      <Table.ScrollContainer>
        <Table.Content className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>শিক্ষার্থী আইডি</Table.Column>
            <Table.Column>নাম</Table.Column>
            <Table.Column>শ্রেণি</Table.Column>
            <Table.Column>শাখা</Table.Column>
            <Table.Column>মোট নম্বর</Table.Column>
            <Table.Column>বর্তমান অবস্থান</Table.Column>
            <Table.Column>পরীক্ষার নাম</Table.Column>
            <Table.Column>শিক্ষাবর্ষ</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>

          <Table.Body>
            {results?.map((result) => (
              <Table.Row key={result._id}>
                <Table.Cell>{result.studentId}</Table.Cell>
                <Table.Cell>{result.name}</Table.Cell>
                <Table.Cell>{result.class}</Table.Cell>
                <Table.Cell>{result.section}</Table.Cell>
                <Table.Cell>{result.total}</Table.Cell>
                <Table.Cell>{result.position}</Table.Cell>
                <Table.Cell>{result.examName}</Table.Cell>
                <Table.Cell>{result.academicYear}</Table.Cell>

                <Table.Cell>
                  <div className="flex gap-2">
                    <Link href={`/results/${result._id}`}>
                      <Button>বিস্তারিত</Button>
                    </Link>

                    <Link href={`/results/${result._id}/edit`}>
                      <Button variant="outline">
                        এডিট
                      </Button>
                    </Link>
                      <AlertDialog>
                      <Button variant="danger">মুছে ফেলুন</Button>
                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                              <AlertDialog.Icon status="danger" />
                              <AlertDialog.Heading>ফলাফল স্থায়ীভাবে মুছে ফেলতে চান?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                              <p>
                                এটি স্থায়ীভাবে মুছে ফেলবে <strong>{result.name}</strong> এবং এর সব তথ্য।
                                এই কাজটি পরে আর ফিরিয়ে আনা যাবে না。
                              </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                              <Button slot="close" variant="tertiary">
                                বাতিল করুন
                              </Button>
                              <Button slot="close" onClick={() => handleDelete(result._id)} variant="danger">
                                মুছে ফেলুন
                              </Button>
                            </AlertDialog.Footer>
                          </AlertDialog.Dialog>
                        </AlertDialog.Container>
                      </AlertDialog.Backdrop>
                    </AlertDialog>
                    </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default ResultsTable;